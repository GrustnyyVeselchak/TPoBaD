const myInput = document.querySelector('input.myInput')
const myButton = document.querySelector('button.myButton')
const myOutput = document.querySelector('pre.myOutput')

let str = ""

function validateData(s) {
  if (!s) throw new Error("Введите данные");
  if (!(s.startsWith("(") && s.endsWith(")"))) {
    throw new Error("Строка должна начинаться и заканчиваться скобками")
  }
  if (!/^[0-9()\s]+$/.test(s)) {
    throw new Error("Можно использовать только цифры, пробелы и скобки")
  }
}

function parseTree(input) {
  let i = 0
  function skipSpaces() {
    while (i < input.length && /\s/.test(input[i])) i++
  }

  function parseNode() {
      skipSpaces()
      let num = ""
      while (i < input.length && /[0-9]/.test(input[i])) {
          num += input[i++]
      }
      if (!num) return null
      let node = { value: num, children: [] }
      skipSpaces()
      if (input[i] === "(") {
          i++
          while (true) {
              skipSpaces();
              if (input[i] === ")") {
                  i++;
                  break
              }
              let child = parseNode()
              if (child) node.children.push(child)
          }
      }
      return node
  }

  function parseList() {
      skipSpaces()
      if (input[i] === "(") {
          i++
          let nodes = []
          while (true) {
              skipSpaces()
              if (input[i] === ")") {
                  i++
                  break
              }
              let node = parseNode()
              if (node) nodes.push(node)
          }
          return nodes.length === 1 ? nodes[0] : { value: "root", children: nodes }
      }
      return null
  }
  return parseList()
}

function renderTree(node, prefix = "", isLast = true) {
    let dashes = "-".repeat(Math.max(1, 6 - node.value.length))
    let result = prefix + node.value + (node.children.length > 0 ? dashes + "+" : "") + "\n"

    let newPrefix = prefix + (isLast ? "      " : "│     ")

    node.children.forEach((child, idx) => {
        let last = idx === node.children.length - 1
        result += renderTree(child, newPrefix, last)
    })

    return result
}

myInput.addEventListener("input", e => (str = e.target.value.trim()))

myButton.addEventListener("click", () => {
  try {
    validateData(str)
    const tree = parseTree(str)
    myOutput.textContent = renderTree(tree)
  } catch (err) {
    myOutput.textContent = "Ошибка: " + err.message
  }
})
