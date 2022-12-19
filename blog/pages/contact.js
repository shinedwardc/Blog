import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object({
    Name: yup.string().required(),
    email: yup.string().required(),
    text: yup.string().required()
}).required();


const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        //console.log(data);
        fetch('http://localhost:3000/api/contacts', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    return (
        <div className = "form">
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label>Name</label>
                <input type = "text" name = "name" {...register("Name")} />
                {errors.exampleRequired && <span>This field is required</span>}
                <label>Email</label>
                <input label = "email" {...register("email")} />
                <label>Text</label>
                <input label = "text" width = "50" height = "50" {...register("text")} />
                <input type = "submit"/>
            </form>
        </div>
    )
}

export default Contact