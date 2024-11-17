import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';

const RightNavbar = () => {
    return (
        <div className='p-2 space-y-3'>
            <SocialLogin />
            <FindUs />
        </div>
    );
};

export default RightNavbar;