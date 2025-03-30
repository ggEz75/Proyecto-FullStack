'use client';
import { Flex, TextField, Button } from '@radix-ui/themes'
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons'

function SigninForm() {
    return (
        <Flex direction="column" gap="4" className='w-full'>
            <label htmlFor="email">Email</label>

            <TextField.Root id="email" type="email" placeholder="email@domain.com" autoFocus>
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

            <Button>Sign In</Button>

        </Flex>
    )
    }

    export default SigninForm;