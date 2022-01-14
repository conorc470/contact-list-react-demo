import ContactCards from "./ContactCards";


const App = () => {
  return (
    <div className="bg-black">
			<section>
				<form>
					<input 
						type="text"
						className="ml-20 mt-6 rounded-md p-2"
						placeholder="Type here to filter results..." 
					/>
				</form>	
			</section>
			<section>
				<ContactCards />
			</section>
    </div>
  )
}

export default App
