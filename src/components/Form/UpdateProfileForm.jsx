import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../api/utils";
import { useNavigate } from "react-router-dom";


const UpdateProfileForm = () => {
    const { user, updateUserProfile, setLoading } = useAuth();

    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const image = form.image.files[0];

        try {
            setLoading(true);
            // 1. Upload image and get image url
            const image_url = await imageUpload(image);
            console.log(image_url)

            //  3. Save username and photo in firebase
            await updateUserProfile(name, image_url);
            navigate('/dashboard/profile');
            setLoading(false);
            toast.success('Updated user profile Successful')

        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm'>
                            Name
                        </label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            defaultValue={user?.displayName}
                            placeholder='Enter Your Name Here'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            data-temp-mail-org='0'
                        />
                    </div>
                    <div>
                        <label htmlFor='image' className='block mb-2 text-sm'>
                            Select Image:
                        </label>
                        <input
                            required
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateProfileForm;