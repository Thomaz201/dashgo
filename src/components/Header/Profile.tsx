import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Thomaz</Text>
        <Text color="gray.300" fontSize="small">lucasr@eumesmo.com</Text>
      </Box>

      <Avatar size="md" name="Lucas Thomaz" src="https://github.com/Thomaz201.png" />

    </Flex>
  )
}