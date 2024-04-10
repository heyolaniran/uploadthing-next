'use client'

import { UploadButton } from "@/utils/uploadthing"
import { Toaster, toast } from "sonner"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Image from "next/image";
import { useState } from "react";
import { Files } from "@/interfaces/files";
import Link from "next/link";
export default function ImageUpload () {

    const [files, setFiles] = useState<Files[] | null>(null); 

    const handleCopy =  () => {
        toast.success('File location copied to the Clipboard !'); 
    }

    return (
        <>
        <UploadButton endpoint='imageUploader'
        appearance={{
           allowedContent: "text-white text-xs mt-2 mb-4"
        }}
        onClientUploadComplete={(res : Files[]) => {
            console.log('files',  res); 

            setFiles(res) ; 
            toast.success('File upload successfully completed');
            
        }}
        onUploadError={(err : Error) => {
            toast.error(err.message) ; 
        }}
        />
            {files && (
                <>
                    {files.map((file : Files) => (
                        <div className="relative flex items-center" key={file.key}>
                            <Link href={file.url} target="_blank" className="absolute top-0 left-2 h-full flex items-center justify-center text-gray-500">
                             <Image alt="" src={`/go.svg`} width={32} height={32} className="object-contain" />
                            </Link>
                            <input
                            type="text"
                            className="w-full p-2 bg-gray-700 rounded-lg pr-6 pl-10"
                            readOnly
                            value={file.url}
                            />
                            <CopyToClipboard text={file.url} onCopy={handleCopy}>
                            <button className="absolute top-0 right-1 h-full flex items-center justify-center text-gray-500">
                                <Image alt="" src={`/copy.svg`} width={32} height={32} className="object-contain" />
                            </button>
                            </CopyToClipboard>
                           
                        </div>
                    ))}
                    
                </>
            )}
            
        <Toaster richColors closeButton position="bottom-center" />
        </>
    )

}