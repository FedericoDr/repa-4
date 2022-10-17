import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../../componentes/Notas/NoteList';
import Search from '../../componentes/Notas/Search'
import './Tareas.css';


const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Esta es mi Primera nota!',
			date: '15/10/2022',
		},
		{
			id: nanoid(),
			text: 'Esta es mi Segunda nota!',
			date: '21/10/2022',
		},
		{
			id: nanoid(),
			text: 'Esta es mi Tercera nota!',
			date: '28/10/2022',
		},
		{
			id: nanoid(),
			text: 'Esta es mi Cuarta nota!',
			date: '30/10/2022',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;