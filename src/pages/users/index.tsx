import { Box, Button, Flex, Heading, Icon, IconButton, Table, Th, Thead, Tr, Checkbox, Tbody, Td, Text, useBreakpointValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "6"]}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon
                  as={RiAddLine}
                  fontSize="20"
                />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["2", "4", "6"]} color="gray.300" width={["6", "8"]}>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>
                  Usuário
                </Th>
                {isWideVersion && (
                  <Th>
                    Data de cadastro
                  </Th>
                )}
                <Th width={["6", "8"]}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["2", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Thomaz</Text>
                    <Text fontSize="sm" color="gray.300">lucasr@eumesmo.com</Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>
                    04 de Abril, 2021
                  </Td>
                )}
                <Td px={["2", "4", "6"]}>
                  {isWideVersion ? (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon
                        as={RiPencilLine}
                        fontSize="16"
                      />}
                    >
                      Editar
                    </Button>
                  ) : (
                    <IconButton
                      aria-label="Edit user"
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      icon={<Icon
                        as={RiPencilLine}
                        fontSize="16"
                      />
                      }
                    />
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}