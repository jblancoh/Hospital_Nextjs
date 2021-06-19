import React, { useState, useRef } from "react";
import {
  Text,
  Stack,
  HStack,
  IconButton,
  Box,
} from "@chakra-ui/react"
import { AttachmentIcon, DeleteIcon, CopyIcon } from "@chakra-ui/icons"
import styles from "./fileupload.module.css";
import _ from 'lodash'

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 2000000;
const KILO_BYTES_PER_BYTE = 1000;

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const FileUpload = ({
  label,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  updateFilesCb,
  ...props
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!props.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  console.log('files', files);
  return (
    <>
      <label>{label}</label>
      <HStack>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" p="6">
          <button type="button" onClick={handleUploadBtnClick}>
            <AttachmentIcon />
            <Text> Cargar archivo</Text>
          </button>
          <input
            type="file"
            ref={fileInputField}
            title=""
            value=""
            onChange={handleNewFileUpload}
            className={`${styles.inputFile}`}
            {...props}
          />
        </Box>
        {!_.isEmpty(files) &&
          <Box d="flex" p="6" maxW="md" alignItems="center">
            <Box d="flex" p="6" w="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
              {Object.keys(files).map((fileName, index) => {
                let file = files[fileName];
                let isImageFile = file.type.split("/")[1] === "image";
                console.log('fileName', isImageFile)
                return (
                  <section key={fileName}>
                    <div>
                      <Stack>
                        <CopyIcon w={10} h={10} />
                        <Text>{file.name} kb</Text>
                        <Text>{convertBytesToKB(file.size)} kb</Text>
                      </Stack>
                    </div>
                  </section>
                );
              })}
            </Box>
            <Box d="flex" alignItems="center" justifyContent="center" p="6">
              <IconButton colorScheme="red" icon={<DeleteIcon />} onClick={() => { }} />
            </Box>
          </Box>
        }
      </HStack>
    </>
  )
}

export default FileUpload;