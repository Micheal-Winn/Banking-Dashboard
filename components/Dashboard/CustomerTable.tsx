import React, { useState } from 'react'
import {Table,ScrollArea,Checkbox,createStyles,Group} from "@mantine/core"
import * as Avatar from '@radix-ui/react-avatar';

import { tableData } from '@/data/Data';

const useStyles = createStyles((theme) => ({
    rowSelected: {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
          : theme.colors[theme.primaryColor][0],
    },
  }));

const CustomerTable = () => {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["1"]);
	const toggleRow = (id: string) =>
				setSelection((current) =>
					current.includes(id)
						? current.filter((item) => item !== id)
						: [...current, id]
				);

  const toggleAll = () =>
		setSelection((current) =>
			current.length === tableData.length ? [] : tableData.map((row) => row.id)
		);

  const rows = tableData.map((row)=>{
    const selected = selection.includes(row.id)

    return (
			<tr key={row.id} className={cx({ [classes.rowSelected]: selected })}>
				<td>
					<Checkbox
						checked={selection.includes(row.id)}
						onChange={() => toggleRow(row.id)}
						transitionDuration={0}
					/>
				</td>
				<td>{row.id}</td>
				<td>
					<div className='flex gap-1 items-center'>
						<Avatar.Root className="bg-blackA3 inline-flex h-[35px] w-[35px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
							<Avatar.Image
								className="h-full w-full rounded-[inherit] object-cover"
								src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
								alt="Colm Tuite"
							/>
							<Avatar.Fallback
								className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
								delayMs={600}
							>
								CT
							</Avatar.Fallback>
						</Avatar.Root>
            <p>{row.name}</p>
					</div>
				</td>
        <td>{row.nrc}</td>
        <td>{row.email}</td>
        <td>{row.createdDate}</td>
        <td className='text-center font-bold'>{row.totalAccount}</td>
			</tr>
		);
  })

  return (
		<section className='mt-10 mr-14 mb-6 shadow-lg bg-white rounded-lg'>
			<ScrollArea>
				<Table miw={800} verticalSpacing={"sm"} pl={2}>
					<thead>
						<tr>
							<th>
								<Checkbox
									onChange={toggleAll}
									indeterminate={
										selection.length > 0 &&
										selection.length !== tableData.length
									}
									checked={selection.length === tableData.length}
									transitionDuration={0}
								/>
							</th>
							<th>CustomerId</th>
							<th>Customer Name</th>
							<th>NRC</th>
							<th>Email</th>
							<th>Created Date</th>
							<th className='flex justify-center'>Total Account</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
			</ScrollArea>
		</section>
	);
}

export default CustomerTable