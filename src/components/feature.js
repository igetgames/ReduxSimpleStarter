import React from 'react';
import requireAuth from './auth/requireAuth';

export default requireAuth(() => <div>Welcome to our features!</div>);
