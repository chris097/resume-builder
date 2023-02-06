import { useState } from 'react'
import Input from '../components/input';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { workHistorySchema } from '../validator';
import { fetchWorkHistory } from '../service';
import toast from 'react-hot-toast';
import { ROUTE_URL } from '../routes/url';
import Button from '../components/Button';
// import { CONSTANT_TEXT } from '../constant';
// import { apiUrls } from '../helpers/api/url';
// import useQueryApi from '../helpers/useQuery';

const WorkHistory = () => {

  // state
  const [loading, setLoading] = useState(false);
  // routes
  const navigate = useNavigate();

  // const { data, } = useQueryApi([CONSTANT_TEXT.GET_WORK_HISTORY], apiUrls.WORK_HISTORY);
  // const works: [] = data?.data;

  const formik = useFormik({
    initialValues: {
      title: "",
      employer: "",
      description: "",
      state: "",
      country: "",
      start_date: "",
      end_date: ""
    },
    validationSchema: workHistorySchema,
    onSubmit: values => {
      return fetchWorkHistory(values,
        (res: any) => {
          toast.success(res.message)
          setLoading(false)
          navigate(ROUTE_URL.TECHNICAL_SKILL_URL)
        },
        (err: any) => {
          toast.error(err.message)
          setLoading(false)
        }
      )
    }
  });

  return (
    <>
      <div className='max-w-5xl mx-auto w-full my-8'>
        <button onClick={() => navigate(-1)} className='mb-6 text-basegray text-sm font-light flex space-x-1 cursor-pointer items-center'><MdOutlineKeyboardBackspace size="16px" /> <span>Back</span></button>
        <div className='max-w-4xl mx-auto'>
          <div className='font-light text-blue-700'>Work History</div>
          <div className='font-light text-basegray mb-8 my-3'>We suggest including an email and phone number.</div>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex space-x-4'>
              <Input
                label='Job Title'
                input={{
                  type: 'text',
                  id: "title",
                  ...formik.getFieldProps('title')
                }}
              />
              <Input
                label='Employer'
                input={{
                  type: 'text',
                  id: "employer",
                  ...formik.getFieldProps('employer')
                }}
              />
            </div>
            <div className='flex space-x-4 mt-3'>
              <Input
                label='State'
                input={{
                  type: 'text',
                  id: "state",
                  ...formik.getFieldProps('state')
                }}
              />
              <Input
                label='Country'
                input={{
                  type: 'text',
                  id: "country",
                  ...formik.getFieldProps('country')
                }}
              />
            </div>
            <div className='mt-3'>
              <label className="text-basegray text-sm" htmlFor='description'>Project Description</label>
              <textarea
                className="border w-full h-32 px-3 mt-1 focus:outline-none text-basegray text-sm border-gray-300"
                id='description'
                {...formik.getFieldProps('description')}
              />
            </div>
            <div className='flex space-x-4 mt-3'>
              <Input
                label='Start Date'
                input={{
                  type: 'date',
                  id: "state_date",
                  ...formik.getFieldProps('start_date')
                }}
              />
              <Input
                label='End Date'
                input={{
                  type: 'date',
                  id: "end_time",
                  ...formik.getFieldProps('end_date')
                }}
              />
            </div>
            <div className='flex justify-between mt-16 font-light'>
              <button type='button' className='border w-32 h-10'>Back</button>
              <Button
                height='h-10'
                width='w-32'
                bg='bg-red-500'
                color="text-white"
                type='submit'
                name={loading ? "loading...": "Save & Next"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default WorkHistory;