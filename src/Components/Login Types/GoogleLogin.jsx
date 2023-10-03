
import { FcGoogle } from 'react-icons/fc';
const GoogleLogin = () => {
    return (
        <div className='flex justify-center border p-2 border-red-300 rounded-md'>
            <div className='flex items-center gap-3'>
            <FcGoogle className='text-2xl'></FcGoogle>
            <span className='font-semibold'>Login With Google</span>
            </div>
        </div>
    );
};

export default GoogleLogin;