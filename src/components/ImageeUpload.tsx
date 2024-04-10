'use client'

import { UploadButton } from "@/utils/uploadthing"

export default function ImageUpload () {

    return (
        <>
        <UploadButton endpoint='imageUploader'/>
        </>
    )

}