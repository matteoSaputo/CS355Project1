import { React, useState} from 'react';
import lists from '../../../config/list';
import Select from 'react-select';
import NavigationBar from '../../NavigationBar';
import DashboardFooter from '../../DashboardFooter';
import '../../../styles/Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = (props) => {
    const [newAllergy, setNewAllergy] = useState('');
    const [newPreference, setNewPreference] = useState('');
    const [removingAllergy, setRemovingAllergy] = useState('');
    const [removingPreference, setRemovingPreference] = useState('');
    const [selectedOption, setSelectedOption] = useState('Update Allergies');

    const handleAddAllergy = async (event) => {
        event.preventDefault();
        if (!lists.ingredients.get(newAllergy)) {
            return alert('Please provide vaild ingredient');
        }//check if it matchs a vaild ingreident

        if (!newAllergy) {
            return alert('Please enter an ingredient you are allergic to');
        }

        if (props.profile.allergies.includes(newAllergy)) {
            return alert('Allergy already exists');
        }//checks to make sure user doesn't add duplicates

        /*update allergy list*/
        const updatedAllergies = [...props.profile.allergies, newAllergy];
        const updatedAllergiesOptions = [...props.profile.allergiesOptions, { label: newAllergy, value: newAllergy }];

        props.setProfile({
            ...props.profile,
            allergies: updatedAllergies,
            allergiesOptions: updatedAllergiesOptions
        });
        setNewAllergy(""); // Clear the input field
    }

    const handleRemoveAllergy = async (event) => {
        event.preventDefault();
        if (!removingAllergy) {
            return alert('Please provide vaild ingredient');
        }//need to check if it matchs a vaild ingreident

        if (!props.profile.allergies.includes(removingAllergy)) {
            return alert('Allergy does not exists');
        }//user cant remove an allergy that isn't in the list

        /*update allergy list*/
        const updatedAllergies = props.profile.allergies.filter(allergy => allergy !== removingAllergy);
        const updatedAllergiesOptions = props.profile.allergiesOptions.filter(opt => opt.label !== removingAllergy);
        props.setProfile({
            ...props.profile,
            allergies: updatedAllergies,
            allergiesOptions: updatedAllergiesOptions
        });
        setRemovingAllergy(""); // Clear the input field
    }

    const handleAddPreference = async (event) => {
        event.preventDefault();
        if (!newPreference) {
            return alert('Please provide vaild preference');
        }//need to check if it matchs a vaild ingreident

        if (props.profile.preferences.includes(newPreference)) {
            return alert('Preference already exists');
        }//checks to make sure user doesn't add duplicates

        const updatedPreferences = [...props.profile.preferences, newPreference];
        const updatedPreferencesOptions = [...props.profile.preferencesOptions, { label: newPreference, value: newPreference }];

        props.setProfile({
            ...props.profile,
            preferences: updatedPreferences,
            preferencesOptions: updatedPreferencesOptions
        });
        setNewPreference(""); // Clear the input field
    }

    const handleRemovePreference = async (event) => {
        event.preventDefault();
        if (!removingPreference) {
            return alert('Please provide vaild prefernece');
        }//need to check if it matchs a vaild ingreident

        if (!props.profile.preferences.includes(removingPreference)) {
            return alert('Allergy does not exists');
        }//user cant remove an allergy that isn't in the list

        /*update allergy list*/
        const updatedPreferences = props.profile.preferences.filter(preference => preference !== removingPreference);
        const updatedPreferencesOptions = props.profile.preferencesOptions.filter(opt => opt.label !== removingPreference);
        props.setProfile({
            ...props.profile,
            preferences: updatedPreferences,
            preferencesOptions: updatedPreferencesOptions
        });
        setRemovingPreference(""); // Clear the input field
    }

    const renderContent = () => {
        if (!props.profile) {
            return null;
        };

        switch (selectedOption) {
            case 'Update Preference':
                return (
                    <div className='sub-div mx-auto text-center'>
                        <h2 className="intro-text">Preferences</h2>

                        <div className="centered-form">
                            <form>
                                <label className='label-text' htmlFor="add-preference">Add Preference:</label>
                                <Select
                                    id="add-preference"
                                    className='select-width mx-auto'
                                    options={lists.preferencesOptions}
                                    value={{ label: newPreference }}
                                    onChange={(e) => setNewPreference(e.label)}
                                />
                                <button className="btn btn-primary bt-pad" type="button" onClick={handleAddPreference}>
                                    Add
                                </button>
                            </form>

                            <form>
                                <label className='label-text' htmlFor="remove-preference">Remove Preference:</label>
                                <Select
                                    id="remove-preference"
                                    className='select-width mx-auto'
                                    options={props.profile.preferencesOptions}
                                    value={{ label: removingPreference }}
                                    onChange={(e) => setRemovingPreference(e.label)}
                                />
                                <button className="btn btn-primary bt-pad" type="button" onClick={handleRemovePreference}>
                                    Remove
                                </button>
                            </form>
                        </div>

                        <h2 className="text-center">Preferences:</h2>
                        <Select className='select-width mx-auto' options={props.profile.preferencesOptions} />
                    </div>
                );
            case 'Update Allergies':
                return (
                    <div className='sub-div mx-auto text-center'>
                        <h2 className="intro-text">Allergies</h2>

                        <div className="centered-form">
                            <form>
                                <label className='label-text' htmlFor="add-allergy">Add Allergy:</label>
                                <Select
                                    id="add-allergy"
                                    className='select-width mx-auto'
                                    options={lists.ingredientsOptions}
                                    onChange={(e) => setNewAllergy(e.label)}
                                    value={{ label: newAllergy }}
                                />
                                <button className="btn btn-primary bt-pad" type="button" onClick={handleAddAllergy}>
                                    Add
                                </button>
                            </form>

                            <form>
                                <label className='label-text' htmlFor="remove-allergy">Remove Allergy:</label>
                                <Select
                                    id="remove-allergy"
                                    className='select-width mx-auto'
                                    options={props.profile.allergiesOptions}
                                    onChange={(e) => setRemovingAllergy(e.label)}
                                    value={{ label: removingAllergy }}
                                />
                                <button className="btn btn-primary bt-pad" type="button" onClick={handleRemoveAllergy}>
                                    Remove
                                </button>
                            </form>
                        </div>
                        <h2 className="text-center">Allergies:</h2>
                        <Select className='select-width mx-auto' options={props.profile.allergiesOptions} />
                    </div>
                )
            default:
                return <div></div>;
        };
    };

    return (
        <div className='profile-div'>
            <NavigationBar />
            <div className="row" data-testid={"profile-side-bar"}>
                {/* Sidebar */}
                <div className="col-md-3" data-testid={"side-bar-buttons"}>
                    <div className="d-flex flex-column flex-shrink-0 p-3 text-white profile-bar">
                        <div className="d-md-block">
                            <p className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                                <span className="profile-title">Profile Settings</span>
                            </p>
                            <hr />
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li className='list-section'>
                                    <button
                                        className={`btn nav-link text-white list-section ${selectedOption === 'Update Allergies' ? 'active' : ''}`}
                                        onClick={() => setSelectedOption('Update Allergies')}
                                    >
                                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2" /></svg>
                                        Update Allergies
                                    </button>
                                </li>
                                <li className='list-section'>
                                    <button
                                        className={`btn nav-link text-white list-section ${selectedOption === 'Update Preference' ? 'active' : ''}`}
                                        onClick={() => setSelectedOption('Update Preference')}
                                    >
                                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table" /></svg>
                                        Update Preference
                                    </button>
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="col-md-9 p-3" data-testid={"side-bar-data"}>
                    {renderContent()}
                </div>
            </div>
            <DashboardFooter />
        </div>
    );
}

export default Profile;