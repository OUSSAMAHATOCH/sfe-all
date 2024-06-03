import { TextField, Button , Stack } from "@material-ui/core";
import { useForm } from "react-hook-form";

type FormValues = {
    email: String
    passwor : String
}


const LoginForm = () => {

    const form = useForm()

    return(
        <>

        <h1>Login</h1>
        <form noValidate>

            <Stack spacing={2} width={400}>
                <TextField  label='email' type="email" />
                <TextField  label='password' type="password" />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
                    
            </Stack>


        </form>
        
        </>
    )

}


export default LoginForm;