import { Container } from "./styles"

function Input({ placeholder, value, onChange }) {
    return (
        <Container 
            type="text" 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input