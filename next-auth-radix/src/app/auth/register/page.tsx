import { Container, Card, Heading, Flex, Text } from '@radix-ui/themes'
import SignupForm from '@/components/auth/SignupForm'
import Link from 'next/link';


function RegisterPage() {
    return (
        <>
            <Container size="1" height="100%" className='p-3 md:p-0 '>
                <Flex className='h-screen w-full items-center '>

                <Card className='w-full p-7'>
                <Heading>Sign Up</Heading>
                <SignupForm />

                <Flex>
                    <Text>
                        Already have an account?
                    </Text>
                    <Link href="/auth/login" className='text-blue-500 ml-1'>
                        Sign In
                    </Link>
                </Flex>

                </Card>
                </Flex>
            </Container>    
        </>
        
    )
}

export default RegisterPage