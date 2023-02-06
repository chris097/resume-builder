import { useState } from 'react'
import { MdOutlineKeyboardBackspace, MdDelete } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import Input from '../components/input';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { userinfoSchema } from '../validator';
import { useQueryClient } from '@tanstack/react-query';
import { fetchProfessionalSummary } from '../service';
import toast from 'react-hot-toast';
import { ROUTE_URL } from '../routes/url';
import useQueryApi from '../helpers/useQuery';
import { CONSTANT_TEXT } from '../constant';
import { apiUrls } from '../helpers/api/url';
import Button from '../components/Button';
import { useAuth } from '../context/authContext';

const ProfessionalSummary = () => {

  //state
  const [toggleAdditioanlLink, setToggleAdditionalLink] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  //context
  const { userName } = useAuth()
  console.log(userName)
  // route
  const navigate = useNavigate();

  //query
  const { data } = useQueryApi([CONSTANT_TEXT.GET_ABOUT], apiUrls.USER_INFO);
  // invalidate query
  const queryClient = useQueryClient();

  // variables
  const user = data?.data[0] || {};
  const disableUser = Object.keys(user)?.length === 0;
  
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      profession: "",
      city: "",
      street: "",
      state: "",
      country: "",
      email: "",
      phone: "",
      bio: "",
      linkedin: "",
      twitter: "",
      website: ""
    },
    validationSchema: userinfoSchema,
    onSubmit: values => {
      console.log(values)
      setLoading(true)
      return fetchProfessionalSummary(values,
        (res: any) => {
          if (res.status === 201) {
            toast.success(res.message)
            setLoading(false)
            // queryClient.invalidateQueries()
            navigate(ROUTE_URL.WORK_HISTORY_URL)
          } else {
            toast.error(res.message)
            setLoading(false)
          }
        },
        (err: any) => {
          toast.error(err.message);
          setLoading(false)
        }
      )
    }
  });

  return (
    <div>
      <div className='max-w-5xl mx-auto w-full my-8'>
        <button onClick={() => navigate(-1)} className='mb-6 text-basegray text-sm font-light flex space-x-1 cursor-pointer items-center'><MdOutlineKeyboardBackspace size="16px" /> <span>Back</span></button>
        <div className='max-w-4xl mx-auto'>
          <div className='font-light text-blue-700'>Professional Summary</div>
          <div className='font-light text-basegray mb-8 my-3'>We suggest including an email and phone number.</div>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex space-x-4'>
              <div className='w-full'>
                <Input
                  label='First Name'
                  input={{
                    type: 'text',
                    id: "first_name",
                    ...formik.getFieldProps('first_name')
                  }}
                />
                {formik.touched.first_name && formik.errors.first_name ? (<span className='text-xs text-red-500'>{formik.errors.first_name}</span>) : null}
              </div>
              <div className='w-full'>
                <Input
                  label='Last Name'
                  input={{
                    type: 'text',
                    id: "last_name",
                    ...formik.getFieldProps('last_name')
                  }}
                />
                {formik.touched.last_name && formik.errors.last_name ? (<span className='text-xs text-red-500'>{formik.errors.last_name}</span>) : null}
              </div>
            </div>
            <div className='mt-3 flex space-x-4 '>
              <div className='w-full'>
                <Input
                  label='Profession'
                  input={{
                    type: 'text',
                    id: "profession",
                    ...formik.getFieldProps('profession')
                  }}
                />
                {formik.touched.profession && formik.errors.profession ? (<span className='text-xs text-red-500'>{formik.errors.profession}</span>) : null}
              </div>
              <div className='w-full'>
                <Input
                  label='Street'
                  input={{
                    id: "street",
                    type: 'text',
                    ...formik.getFieldProps('street')
                  }}
                />
                {formik.touched.street && formik.errors.street ? (<span className='text-xs text-red-500'>{formik.errors.street}</span>) : null}
              </div>
            </div>
            <div className='flex space-x-4 mt-3'>
              <div className='w-full'>
                <Input
                  label='City'
                  input={{
                    type: 'text',
                    id: "city",
                    ...formik.getFieldProps('city')
                  }}
                />
                {formik.touched.city && formik.errors.city ? (<span className='text-xs text-red-500'>{formik.errors.city}</span>) : null}
              </div>
              <div className='w-full'>
                <Input
                  label='State'
                  input={{
                    type: 'text',
                    id: "state",
                    ...formik.getFieldProps('state')
                  }}
                />
                {formik.touched.state && formik.errors.state ? (<span className='text-xs text-red-500'>{formik.errors.state}</span>) : null}
              </div>
              <div className='w-full'>
                <Input
                  label='Country'
                  input={{
                    type: 'text',
                    id: "country",
                    ...formik.getFieldProps('country')
                  }}
                />
                {formik.touched.country && formik.errors.country ? (<span className='text-xs text-red-500'>{formik.errors.country}</span>) : null}
              </div>
            </div>
            <div className='flex space-x-4 mt-3'>
              <div className='w-full'>
                <Input
                  label='Email'
                  input={{
                    id: "email",
                    type: 'text',
                    ...formik.getFieldProps('email')
                  }}
                />
                {formik.touched.email && formik.errors.email ? (<span className='text-xs text-red-500'>{formik.errors.email}</span>) : null}
              </div>
              <div className='w-full'>
                <Input
                  label='Phone Number'
                  input={{
                    type: 'text',
                    id: "phone",
                    ...formik.getFieldProps('phone')
                  }}
                />
                {formik.touched.phone && formik.errors.phone ? (<span className='text-xs text-red-500'>{formik.errors.phone}</span>) : null}
              </div>
            </div>
            <div className='mt-3 text-basegray text-sm'>
              <label>About Yourself</label>
              <textarea
                id='bio'
                className='border w-full h-24 p-3 mt-1 focus:outline-none border-gray-300'
                {...formik.getFieldProps('bio')}
              />
              {formik.touched.bio && formik.errors.bio ? (<span className='text-xs text-red-500'>{formik.errors.bio}</span>) : null}
            </div>
            <div className='mt-7'>
              <button type='button' onClick={() => setToggleAdditionalLink(open => !open)} className='flex space-x-1 items-center text-sm text-blue-500 cursor-pointer'>
                <BsPlusLg />
                <div>Add Scoial Links</div>
              </button>
                       
              {toggleAdditioanlLink && 
                <>
                <div className='flex space-x-4 mt-3'>
                  <div className='border w-full h-10 items-center mt-1 flex px-3 focus:outline-none text-basegray text-sm border-gray-300'>LinkedIn</div>
                  <div className='w-full'>
                    <Input
                    input={{
                      type: 'text',
                      id: 'linkedin',
                      placeholder: "https://www.linkendin.com",
                      ...formik.getFieldProps('linkedin')
                    }}
                  />
                  {formik.touched.linkedin && formik.errors.linkedin ? (<span className='text-xs text-red-500'>{formik.errors.linkedin}</span>) : null}
                  </div>
                </div>
                <div className='flex space-x-4 mt-3'>
                  <div className='border w-full h-10 items-center mt-1 flex px-3 focus:outline-none text-basegray text-sm border-gray-300'>Twitter</div>
                  <div className='w-full'>
                    <Input
                    input={{
                      type: 'text',
                      id: 'twitter',
                      placeholder: "https://www.twitter.com",
                      ...formik.getFieldProps('twitter')
                    }}
                  />
                  {formik.touched.twitter && formik.errors.twitter ? (<span className='text-xs text-red-500'>{formik.errors.twitter}</span>) : null}
                  </div>
                </div>
                <div className='flex space-x-4 mt-3'>
                  <div className='border w-full h-10 items-center mt-1 flex px-3 focus:outline-none text-basegray text-sm border-gray-300'>Website or Portifolio</div>
                  <div className='w-full'>
                    <Input
                    input={{
                      type: 'text',
                      id: 'website',
                      placeholder: "https://www.website.com",
                      ...formik.getFieldProps('website')
                    }}
                  />
                  {formik.touched.website && formik.errors.website ? (<span className='text-xs text-red-500'>{formik.errors.website}</span>) : null}
                  </div>
                </div>
                </>
              }
                    
            </div>
            <div className='flex justify-between mt-16 font-light'>
              <button type='button' className='border w-32 h-10'>Back</button>
              {disableUser ? <Button
                width='w-32'
                height='h-10'
                bg='bg-red-500'
                color='text-white'
                type='submit'
                name={loading ? "loading..." : "Sava & Next"}
              /> :
                <Button
                width='w-32'
                height='h-10'
                bg='bg-red-500'
                color='text-white'
                name={"Update"}
              />
             }
            </div>
          </form>
        </div>
              
      </div>
    </div>
  )
};

export default ProfessionalSummary