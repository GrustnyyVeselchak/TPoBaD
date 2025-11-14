import { useState } from 'react';
import Button from '../components/Button'
import Input from '../components/Input'
import Output from '../components/Output'

const SearchBar = () => {

    const [url, setUrl] = useState<string>('');
    const [data, setData] = useState<any>(null);
    return(
        <section>
            <Input
                url={url}
                setUrl={setUrl}
            />
            <Button
                url={url}
                setData={setData}
            />
            <Output
                data={data}
            />
        </section>
    )
}

export default SearchBar;