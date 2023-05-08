import React from 'react'
import {Table,ScrollArea,Checkbox,createStyles} from "@mantine/core"
import * as Avatar from '@radix-ui/react-avatar';

const useStyles = createStyles((theme) => ({
    rowSelected: {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
          : theme.colors[theme.primaryColor][0],
    },
  }));

const CustomerTable = () => {
  return (
    <ScrollArea>
        <Table miw={800} verticalSpacing={"sm"}>
            <thead>
                <tr>
                    <th>
                        <Checkbox onChange={()=>{}}
                            indeterminate={false}
                            transitionDuration={0}
                        />
                    </th>
                    <th>CustomerId</th>
                    <th>Customer Name</th>
                    <th>NRC</th>
                    <th>Created Date</th>
                    <th>Total Account</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
    </ScrollArea>
  )
}

export default CustomerTable