import React from 'react';
import UserDetailsInfo from './userDetailsInfo/index';
import IUserDetails from '../../../interfaces/IUserDetails';

type Props = {
  user: IUserDetails;
};

const UserDetails: React.FC<Props> = ({ user }) => (
  <div className="user-details">
    <h1>{user.name}</h1>
    <div className="user-details-infos">
      <UserDetailsInfo name="ID" text={user.id.toString()} />
      <UserDetailsInfo name="email" text={user.email} />
      <UserDetailsInfo name="username" text={user.username} />
      <UserDetailsInfo name="phone" text={user.phone} />
      <UserDetailsInfo name="website" text={user.website} />
    </div>
    <div className="user-details-address">
      <UserDetailsInfo name="city" text={user.address.city} />
      <UserDetailsInfo name="street" text={user.address.street} />
      <UserDetailsInfo name="suite" text={user.address.suite} />
      <UserDetailsInfo name="zipcode" text={user.address.zipcode} />
      <UserDetailsInfo name="latitude" text={user.address.geo.lat} />
      <UserDetailsInfo name="longitude" text={user.address.geo.lng} />
    </div>
    <div className="user-details-company">
      <UserDetailsInfo name="company name" text={user.company.name} />
      <UserDetailsInfo name="bs" text={user.company.bs} />
      <UserDetailsInfo name="catchPhrase" text={user.company.catchPhrase} />
    </div>
  </div>
);

export default UserDetails;
