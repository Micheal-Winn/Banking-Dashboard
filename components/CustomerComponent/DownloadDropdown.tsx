
"use client"
import React from "react";
import Button from "@/components/CustomerComponent/Button";
import {
  IconDownload,
  IconFileText,
  IconCsv,
  IconFileSpreadsheet,
} from "@tabler/icons-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ActionIcon } from "@mantine/core";

const DownloadDropdown = () => {
  return (
    // <Button text="Download" icon={<IconDownload size={16} />} />

    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className="focus-visible:outline-none">
      <button className='flex items-center gap-2 bg-blue-700 text-white px-5 text-sm rounded-md py-2 font-semibold'  aria-label="Customise options">
        <IconDownload size={16} />
        <p>Download</p>
    </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content  className="min-w-[120px] bg-white rounded-md p-[5px]" >
          <DropdownMenu.Item className="hover:outline-none flex items-center gap-2 justify-between py-1 px-3 hover:bg-blue-600 hover:text-white rounded-md cursor-pointer">
            <p className="text-sm uppercase">pdf</p>
            <IconFileText size={14} />
          </DropdownMenu.Item>
          <DropdownMenu.Item className="hover:outline-none flex items-center gap-2 justify-between py-1 px-3 hover:bg-blue-600 hover:text-white rounded-md cursor-pointer">
            <p className="text-sm uppercase"> csv</p>
            <IconCsv size={14} />
          </DropdownMenu.Item>
          <DropdownMenu.Item className="hover:outline-none flex items-center gap-2 justify-between py-1 px-3 hover:bg-blue-600 hover:text-white rounded-md cursor-pointer">
            <p className="text-sm uppercase"> excel</p>
            <IconFileSpreadsheet size={14} />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DownloadDropdown;
