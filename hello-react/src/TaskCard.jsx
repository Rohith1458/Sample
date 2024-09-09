import './TaskCard.css'

const TaskCard = (props) => {
  console.log(props)
  return (
    <div class="inline-block border border-gray-500"className='w-1/2 bg-white p-4 rounded-lg border border-300 mx-auto'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{props.assigneeName}</p>
      <p>{props.dueDate}</p>
    </div>
  )
}
export default TaskCard