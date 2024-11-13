import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);

    const showSuccess = () => {
        toast.success("Add To Cart successfully!");
        setShowSuccessToast(false);
    };

    const showError = () => {
        toast.error("Too muchhhh!!!");
        setShowErrorToast(false);
    };

    // Gọi toast khi state thay đổi
    React.useEffect(() => {
        if (showSuccessToast) {
            showSuccess();
        }
    }, [showSuccessToast]);

    React.useEffect(() => {
        if (showErrorToast) {
            showError();
        }
    }, [showErrorToast]);

    return (
        <ToastContext.Provider value={{ setShowSuccessToast, setShowErrorToast }}>
            {children}
        </ToastContext.Provider>
    );
};
