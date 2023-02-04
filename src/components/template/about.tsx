import { CONSTANT_TEXT } from '../../constant';
import { apiUrls } from '../../helpers/api/url';
import useQueryApi from '../../helpers/useQuery'
import Avatar from '../../public/svgs/avatar'
import { SkeletonAbout } from '../skeletonLoader';

const About = () => {

  const { isLoading, data } = useQueryApi([CONSTANT_TEXT.GET_ABOUT], apiUrls.USER_INFO);
  const bio = data?.data[0] || {};

  console.log(data)

  return (
    <div className='bg-white w-full p-4 rounded-md'>
      {isLoading ? <SkeletonAbout /> :
        <div className='flex space-x-5'>
          <Avatar width='60' height='61' />
          <div>
            <div>
               <div className='text-lg capitalize'>{(bio?.first_name && bio?.last_name)}</div>
            <div className='font-light text-sm text-basegray capitalize'>{bio?.profession}</div>
              </div>
            <div className='mt-2'>
              <div className='text-lg'>ADDRESS</div>
              <div className='font-light text-sm text-basegray capitalize'>{(([bio?.street, bio?.city, bio?.state, bio?.country])?.join(", "))}</div>
            </div>
            <div className='mt-2'>
              <div className='text-lg'>Bio</div>
              <div className='font-light text-sm text-basegray capitalize'>
                {bio?.bio}
              </div>
            </div>
          </div>
          </div>
      }
    </div>
  )
};

export default About;