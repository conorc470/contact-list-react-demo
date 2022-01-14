import React from 'react';
import ContactCards from "./ContactCards"
import useFetch from "react-fetch-hook"

const App = () => {
	const url = 'https://randomuser.me/api'
	const { isLoading, data, error } = useFetch(url+'?results=200')
	data && console.log(data)

  return (
    <div className="bg-gray-100">
			<section>
				<form>
					<input 
						type="text"
						className="ml-20 mt-6 rounded-md p-2 w-4/12"
						placeholder="Type here to filter results..." 
					/>
				</form>	
			</section>
			<section className="p-20 grid md:grid-cols-4 sm:grid-cols-1 gap-4">
				<ContactCards />
			</section>
    </div>
  )
}

export default App