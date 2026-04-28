import 'devicon/devicon.min.css';

export default function Skills() {

    return (
        <div className="p-[24px] bg-base-200 flex flex-col gap-5">
            <p className="title text-6xl">My Skills</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}

                    <tbody>
                        <tr>
                            <td className="text-[10px] align-top">LANGUAGES</td>
                            <td>
                                <div className="flex flex-row flex-wrap gap-4">
                                    <div>
                                        <p>
                                            <i className="devicon-html5-plain colored"></i> Html 5
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <i className="devicon-css3-plain colored"></i> Css
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <i className="devicon-javascript-plain colored"></i> Javascript
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <i className="devicon-typescript-plain colored"></i> Typescript
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <i className="devicon-java-plain colored"></i> Java
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <i className="devicon-csharp-plain colored"></i> C#
                                        </p>
                                    </div>

                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-[10px] align-top">FRONT</td>
                            <td>
                                <div className="flex flex-row flex-wrap gap-4">

                                    <div>
                                        <p>
                                            <i className="devicon-react-plain colored"></i> React
                                        </p>
                                    </div>

                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-[10px] align-top">BACK</td>
                            <td>
                                <div className="flex flex-row flex-wrap gap-4">

                                    <div>
                                        <p>
                                            <i className="devicon-nodejs-plain colored"></i> Node.js
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <i className="devicon-springboot-plain colored"></i> Springboot
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <i className="devicon-laravel-plain colored"></i> Laravel
                                        </p>
                                    </div>

                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-[10px] align-top">DATA</td>
                            <td>
                                <div className="flex flex-row flex-wrap gap-4">

                                    <div>
                                        <p>
                                            <i className="devicon-mysql-plain colored"></i> MySql
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <i className="devicon-postgresql-plain colored"></i> PostgreSql
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <i className="devicon-oracle-plain colored"></i> Oracle
                                        </p>
                                    </div>

                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-[10px] align-top">TOOLS</td>
                            <td>
                                <div className="flex flex-row flex-wrap gap-4">

                                    <div>
                                        <p>
                                            <i className="devicon-figma-plain colored"></i> Figma
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <i className="devicon-illustrator-plain colored"></i> Illustrator
                                        </p>
                                    </div>

                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-[10px] align-top">DEPLOY</td>
                            <td>
                                <div className="flex flex-row flex-wrap gap-4">

                                    <div>
                                        <p>
                                            <i className="devicon-vercel-plain colored"></i> Vercel
                                        </p>
                                    </div>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}