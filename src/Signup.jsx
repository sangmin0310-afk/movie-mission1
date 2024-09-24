import React from 'react';
import { useForm } from 'react-hook-form';
import './SCSS/Signup.scss';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const { name, email, password } = data;

        try {
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_ANON_URL}/auth/v1/signup`, {
                method: 'POST',
                headers: {
                    'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
                },
                body: JSON.stringify({
                    email,
                    password,
                    name,
                }),
            });

            if (response.ok) {
                alert('회원가입에 성공했습니다! 이메일을 확인하세요.');
            } else {
                const { message } = await response.json();
                alert('회원가입에 실패했습니다: ' + message);
            }
        } catch (error) {
            alert('회원가입에 실패했습니다: ' + error.message);
        }
    };

    const password = watch("password");

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="이름"
                    className="signup-input"
                    {...register('name', { required: '이름은 필수 입력 항목입니다.' })}
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}

                <input
                    type="email"
                    placeholder="이메일"
                    className="signup-input"
                    {...register('email', { 
                        required: '이메일은 필수 입력 항목입니다.',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: '유효한 이메일 주소를 입력하세요.'
                        }
                    })}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}

                <input
                    type="password"
                    placeholder="비밀번호"
                    className="signup-input"
                    {...register('password', { 
                        required: '비밀번호는 필수 입력 항목입니다.',
                        minLength: {
                            value: 6,
                            message: '비밀번호는 최소 6자리 이상이어야 합니다.'
                        }
                    })}
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}

                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    className="signup-input"
                    {...register('confirmPassword', { 
                        required: '비밀번호 확인은 필수 입력 항목입니다.',
                        validate: value => value === password || '비밀번호가 일치하지 않습니다.'
                    })}
                />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}

                <button type="submit" className="signup-button">회원가입</button>
            </form>
        </div>
    );
};

export default Signup;
