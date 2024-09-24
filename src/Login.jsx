import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './SCSS/Login.scss';
import kakaoIcon from './images/ico_s_kakao_talk.png';
import googleIcon from './images/d8e8c262bfcb0bb8496a471b2ecbad5f.jpg';  // 이미지 파일을 import

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const { email, password } = data;

        try {
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_ANON_URL}/auth/v1/token?grant_type=password`, {
                method: 'POST',
                headers: {
                    'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const { access_token } = await response.json();
                localStorage.setItem('access_token', access_token);
                alert('로그인에 성공했습니다!');
                navigate('/'); // 로그인 후 메인 화면으로 이동
            } else {
                const { message } = await response.json();
                alert(message);
            }
        } catch (error) {
            alert('로그인에 실패했습니다: ' + error.message);
        }
    };

    const handleKakaoLogin = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_ANON_URL}/auth/v1/token`, {
                method: 'POST',
                headers: {
                    'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
                },
                body: JSON.stringify({
                    provider: 'kakao',
                }),
            });

            if (response.ok) {
                const { access_token } = await response.json();
                localStorage.setItem('access_token', access_token);
                navigate('/'); // 로그인 후 메인 화면으로 이동
            } else {
                const { message } = await response.json();
                alert(message);
            }
        } catch (error) {
            alert('카카오 로그인에 실패했습니다: ' + error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_ANON_URL}/auth/v1/token`, {
                method: 'POST',
                headers: {
                    'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
                },
                body: JSON.stringify({
                    provider: 'google',
                }),
            });

            if (response.ok) {
                const { access_token } = await response.json();
                localStorage.setItem('access_token', access_token);
                navigate('/'); // 로그인 후 메인 화면으로 이동
            } else {
                const { message } = await response.json();
                alert(message);
            }
        } catch (error) {
            alert('구글 로그인에 실패했습니다: ' + error.message);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="이메일 또는 아이디"
                    className="login-input"
                    {...register('email', { required: '이메일은 필수 입력 항목입니다.' })}
                    autoComplete="email"
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}

                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    className="login-input"
                    {...register('password', { required: '비밀번호는 필수 입력 항목입니다.' })}
                    autoComplete="current-password"
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}

                <button type="submit" className="login-button">로그인</button>

                <div className="social-buttons-container">
                    <img 
                        src={kakaoIcon}  // import한 이미지 사용
                        alt="Kakao Login" 
                        className="kakao-login-button" 
                        onClick={handleKakaoLogin}
                    />
                    <img 
                        src={googleIcon}  // import한 이미지 사용
                        alt="Google Login" 
                        className="google-login-button" 
                        onClick={handleGoogleLogin}
                    />
                </div>
            </form>
        </div>
    );
};

export default Login;
