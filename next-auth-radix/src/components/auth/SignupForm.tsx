'use client';
import { Flex, TextField, Button } from '@radix-ui/themes'
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons'

function SignupForm() {
    return (
        <Flex direction="column" gap="4" className='w-full'>
            
            <label htmlFor="name">Name</label>
            <TextField.Root id="name" type="text" placeholder="John Doe" autoFocus>
            <TextField.Slot>
                <PersonIcon height="16" width="16" />
            </TextField.Slot>
            </TextField.Root>

            <label htmlFor="email">Email</label>
            <TextField.Root id="email" type="email" placeholder="email@domain.com">
            <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16" />
            </TextField.Slot>
            </TextField.Root>

            <label htmlFor="password">password</label>
            <TextField.Root id="password" type="password">
                <TextField.Slot>
                    <LockClosedIcon height="16" width="16" />
                </TextField.Slot>
            </TextField.Root>

            <Button>Sign Up</Button>

        </Flex>
    )
    }

    export default SignupForm;