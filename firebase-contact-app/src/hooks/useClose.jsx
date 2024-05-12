import React, { useState } from 'react'

function useClose() {
    const [isOpen , setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    return [isOpen , onOpen , onClose];
}

export default useClose