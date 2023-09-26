import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Statistics = ({ phone }) => {
    // const { id, card_title, card_description, bg_color, text_color, image, Category_description, category_price, btn_color } = phone || {}


    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        // { name: 'Group C', value: 300 },
        // { name: 'Group D', value: 200 },
    ];
    const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ];


    return (
        <div className=" w-[800px] mx-auto border-red-500 border-5 h-[50vh]">
            <div className='lg:ml-10'>

                <PieChart width={730} height={400}>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#8884d8" />
                    {/* <Pie data={data02} dataKey="value" nameKey="name" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
                </PieChart>
            </div>


            <div className='flex justify-center items-center py-5 text-lg font-bold '>
                <h1 className='pr-4'>Your Donation
                    <span><input type="text" className='bg-red-400 mx-2 w-[150px]' />
                    </span>
                </h1>
                <h1>Total Donation

                    <span><input type="text" className='bg-green-400 mx-2 w-[150px]' />
                    </span>
                </h1>

            </div>
            
        </div>
       
    );
};

export default Statistics;