'use client';
import { Flex, TextField, Button, Text } from '@radix-ui/themes';
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { Controller, useForm } from 'react-hook-form';

type FormData = {
    email: string;
    password: string;
};

function SigninForm() {
    const { control, handleSubmit, formState:{errors} } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: '', // definir un valor por defecto vacio para conservar el enfoque y que no salga error en tipescript
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}> 
            <Flex direction="column" gap="4" className="w-full"  mt="4">

                <label htmlFor="email">Email</label>
                <Controller 
                    name="email" 
                    control={control}
                    rules={{ 
                        required: { message:"El correo es requerido", value: true, },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Expresión regular para validar emails
                            message: "Por favor, ingresa un correo válido",
                        },
                    }}
                    render={({ field }) => (
                        <TextField.Root {...field} placeholder='nombre@tudominio.com'>
                            <TextField.Slot>
                                <EnvelopeClosedIcon height="16" width="16" />
                            </TextField.Slot>
                        </TextField.Root>
                    )}
                />
                {errors.email && <Text color="red">{errors.email.message}</Text>}

                    <label htmlFor="password">Password</label>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ 
                            required:
                            {   message:"La contraseña es requerida", 
                                value: true,
                            },
                            minLength: {
                                value: 8,
                                message: "La contraseña debe tener al menos 8 caracteres",
                            },
                        }}
                        render={({ field }) => (
                            <TextField.Root {...field} type="password" className="text-field-root">
                                <TextField.Slot>
                                    <LockClosedIcon height="16" width="16" />
                                </TextField.Slot>
                            </TextField.Root>
                        )}
                    />
                    {errors.password && <Text color="red">{errors.password.message}</Text>}

                <Button type="submit" mt="4" >Sign In</Button>
            </Flex>
        </form>
    );
}

export default SigninForm;
