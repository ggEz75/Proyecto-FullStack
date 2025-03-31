import { Container, Card, Heading, Flex, Text } from '@radix-ui/themes'
import SigninForm from '@/components/auth/SigninForm'
import Link from 'next/link';


function LoginPage() {
    return (
        <>
            <Container size="1" height="100%" className='p-3 md:p-0 '>
                <Flex className='h-screen w-full items-center '>

                <Card className='w-full p-7'>
                <Heading>Sign In</Heading>

                <SigninForm />
                
                <Flex>
                    <Text>
                        Don't have an account?
                    </Text>
                    <Link href="/auth/register" className='text-blue-500 ml-1'>
                        Sign Up
                    </Link>
                </Flex>

                </Card>
                </Flex>
            </Container>    
        </>
        
    )
}

export default LoginPage