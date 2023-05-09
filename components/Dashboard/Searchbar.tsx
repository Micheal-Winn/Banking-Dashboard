import { TextInput, TextInputProps, ActionIcon, useMantineTheme,Input } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

export default function Searchbar(props: TextInputProps) {
  const theme = useMantineTheme();

  return (

    <div className='w-[30%]'>
      <Input
        icon={<IconSearch size={16} stroke={1.5} />}
        radius="xl"
        placeholder='Search here'
      />
    </div>

			// <TextInput
			// 	variant="filled"
			// 	width={"100%"}
			// 	icon={<IconSearch size="1.1rem" stroke={1.5} />}
			// 	radius="xl"
			// 	size="md"
			// 	placeholder="Search here"
			// 	rightSectionWidth={42}
			// 	{...props}
			// />

      

	);
}