import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader'
import { WorkspaceProvider } from '@/features/workspace/WorkspaceProvider'
import { Heading, Link, Text, VStack } from '@chakra-ui/react'

export default function Page() {
  return (
    <WorkspaceProvider>
      <DashboardHeader />
      <VStack w="full" h="calc(100vh - 64px)" justifyContent="center">
        <Heading>Não detectamos o pagamento e seua conta foi suspensa</Heading>
        <Text>
          Para voltar o acesso, efetuar o pagemnto e entrar em contato em agiapp.com.br
        </Text>
        <Text>
          .
        </Text>
      </VStack>
    </WorkspaceProvider>
  )
}
