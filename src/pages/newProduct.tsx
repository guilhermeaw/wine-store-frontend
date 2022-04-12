import { useRef, ChangeEvent, useState  } from 'react';
import { Button, FormGroup, InputAdornment, TextField, Typography } from "@mui/material";
import { ContentWrapper } from "../components/ContentWrapper";
import { Header } from "../components/Header";
import { api } from '../services/api';
import { useNavigate } from 'react-router';

export const NewProductPage = () => {
    const titleRef = useRef(null) as React.RefObject<HTMLInputElement>;
    const descriptionRef = useRef(null) as React.RefObject<HTMLInputElement>;
    const priceRef = useRef(null) as React.RefObject<HTMLInputElement>;

    const [file, setFile] = useState<File>();

    const navigate = useNavigate();

    const handleAddNewProduct = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();

        const title = titleRef.current?.value;
        const description = descriptionRef.current?.value;
        const price = priceRef.current?.value;

        if (!!title && !!description && !!price && !!file) {
            formData.append('title', title);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('wineImage', file);
            
            await api.post('/wines', formData);
            navigate('/dashboard');
        }
    }

    const handleChangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        
        if (!!files) {
            setFile(files[0]);
        }
    }

    return (
        <>
            <Header />
            <ContentWrapper>
                <Typography variant="h1">Adicionar vinho</Typography>
                
                <form onSubmit={handleAddNewProduct}>
                    <FormGroup>
                        <TextField sx={{ margin: '1rem 0' }} inputRef={titleRef} id="title" name="title" label="Nome do vinho" variant="outlined" required size='small' />
                        <TextField sx={{ marginBottom: '1.5rem' }} inputRef={descriptionRef} id="description" name="description" label="Descrição" variant="outlined" required size="small" />
                        <TextField 
                            sx={{ marginBottom: '1.5rem' }}
                            InputProps={{ startAdornment: <InputAdornment position="start">R$</InputAdornment> }} 
                            inputRef={priceRef} 
                            id="price" 
                            name="price" 
                            label="Valor" 
                            variant="outlined" 
                            required 
                            size="small" 
                        />
                        <TextField
                            name="wineImage"
                            type="file"
                            required
                            onChange={handleChangeFileInput}
                            sx={{ marginBottom: '2rem' }}
                        />
                        
                        <Button type="submit" variant="contained">Adicionar</Button>
                    </FormGroup>
                </form>
            </ContentWrapper>
        </>
    );
}
