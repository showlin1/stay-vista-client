import PropTypes from 'prop-types'
import { Fragment } from 'react'
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogTitle,
    DialogPanel,
} from '@headlessui/react'
import ChangePasswordForm from '../Form/ChangePasswordForm';

const ChangePasswordModal = ({ isOpen, closeModal }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium leading-6 text-gray-900'
                                >
                                    Are you sure change password?
                                </DialogTitle>
                                <div className='mt-2'>
                                    <ChangePasswordForm />
                                </div>
                                <hr className='mt-8 ' />
                                <div className='mt-2 justify-around'>

                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                                        onClick={closeModal}
                                    >
                                        No
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
ChangePasswordModal.propTypes = {
    user: PropTypes.object,
    modalHandler: PropTypes.func,
    closeModal: PropTypes.func,
    setIsOpen: PropTypes.func,
    isOpen: PropTypes.bool,
}

export default ChangePasswordModal;