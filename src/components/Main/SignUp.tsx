import { useForm } from 'react-hook-form';
import './SignUp.css';
import React, { useEffect } from 'react';

interface SignUpFormData {
    name: string;
    email: string;
}

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
    const {
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>();

    const onSubmit = (data: SignUpFormData) => {
        console.log('Form submitted:', data);
        onClose();
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <React.Fragment>
            <div
                className={`overlay ${isOpen ? 'active' : ''}`}
                onClick={(e) => e.target === e.currentTarget && onClose()}
            />
            <div className={`modalOverlay ${isOpen ? 'active' : ''}`}>
                <div className="modalContent">
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <label className="label" htmlFor="name">
                            Имя:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="input"
                        />
                        {errors.name && <p className="error">{errors.name.message}</p>}

                        <label className="label" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="input"
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}

                        <div className="buttonContainer">
                            <button type="submit" className="button">
                                ОК
                            </button>
                            <button type="button" className="button" onClick={onClose}>
                                Отмена
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};
