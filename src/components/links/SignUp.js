import { PersonFillAdd } from 'react-bootstrap-icons';
import { HomeButton } from './SignIn';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    return (
        <HomeButton onClick={() => navigate('/signup')}>
            Create Account <PersonFillAdd />
        </HomeButton>
    )
}