import "./TopRanking.scss";

function TopRanking({userName, userId, gitRank, ordNumber, commits}) {
    return (
        <ul classname="Top-user">

            <li id="Top1-user">
                <div classname="user-info">
                    <div classname="profile">   
                        <img id="profile-img" src="https://avatars.githubusercontent.com/u/80656733?v=4"/>
                            <span id="rank-index">
                                {gitRank}{ordNumber}
                            </span>
                        <div classname="profile-info">
                            <div id="userId">{userId}</div>
                            <div id="userName">{userName}</div>
                            <span id="commits">{commits} COMMIT</span>
                        </div>
                    </div>
                </div>
            </li>

            <li id="Top2-user">
                <div classname="user-info">
                    <div classname="profile">   
                        <img id="profile-img" src="https://avatars.githubusercontent.com/u/80656733?v=4"/>
                            <span id="rank-index">
                                {gitRank}{ordNumber}
                            </span>
                        <div classname="profile-info">
                            <div id="userId">{userId}</div>
                            <div id="userName">{userName}</div>
                            <span id="commits">{commits} COMMIT</span>
                        </div>
                    </div>
                </div>
            </li>

            <li id="Top3-user">
                <div classname="user-info">
                    <div classname="profile">   
                        <img id="profile-img" src="https://avatars.githubusercontent.com/u/80656733?v=4"/>
                            <span id="rank-index">
                                {gitRank}{ordNumber}
                            </span>
                        <div classname="profile-info">
                            <div id="userId">{userId}</div>
                            <div id="userName">{userName}</div>
                            <span id="commits">{commits} COMMIT</span>
                        </div>
                    </div>
                </div>
            </li>

        </ul>
    );
}

export default TopRanking;