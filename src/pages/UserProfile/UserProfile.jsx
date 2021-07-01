import withAuthProtected from "../../hoc/withAuthProtected";
import Profile from "../../components/list/Profile/Profile";

function UserProfile(props) {
    return (
        <div className="container col-6 mt-5">
            <Profile />
        </div>
    );
}
export default UserProfile;