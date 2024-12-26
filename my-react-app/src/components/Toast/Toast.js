import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [showErrorAddToast, setShowErrorAddToast] = useState(false);

    const showSuccess = () => {
        toast.success("Add To Cart successfully!");
        setShowSuccessToast(false);
    };

    const showError = () => {
        toast.error("Error When Adding!");
        setShowErrorToast(false);
    };

    const showErrorAdd = () => {
        toast.error("Too muchhhh!!!");
        setShowErrorAddToast(false);
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

    React.useEffect(() => {
        if (showErrorAddToast) {
            showErrorAdd();
        }
    }, [showErrorAddToast]);

    return (
        <ToastContext.Provider value={{ setShowSuccessToast, setShowErrorToast, setShowErrorAddToast }}>
            {children}
        </ToastContext.Provider>
    );
};
