import React, { useState } from "react";
import { Dialog, Button, Icon } from '@equinor/eds-core-react';
import { beat } from "@equinor/eds-icons"
Icon.add({ beat });

const CustomDialog = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    const handleOpen = () => {
        setIsOpen(true)
    };

    const handleClose = () => {
        setIsOpen(false)
    };

    return(
    <>
        <Button aria-haspopup="dialog" onClick={handleOpen}>
            Trigger Dialog
            <Icon name="beat"></Icon>
        </Button>
        <Dialog open={isOpen} isDismissable onClose={handleClose}>
            <Dialog.Header>
                <Dialog.Title>Placeholder</Dialog.Title>
            </Dialog.Header>
            <Dialog.CustomContent>
                <Placeholder>
                        Custom content in a larger placeholder. No actions, only ESC or
                        timedelay
                </Placeholder>    
            </Dialog.CustomContent>
        </Dialog>
    </>
    );
}

export default CustomDialog