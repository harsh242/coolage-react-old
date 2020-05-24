import React from 'react';
import blogimg from "../../assets/img/blog/blog.png"


export default class Blog extends React.Component {

    constructor() {
        super();
        this.state = {
            isToggleOn: false,
            show: false,
            showme: true,
            blog: [
                {
                    title: "Machine Learning",
                    user: "Harsh Badhai",
                    date:"15",
                    month:"Jan",
                    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.",
                    views:"3"
                },
                {
                    title: "Machine Learning",
                    user: "Harsh Badhai",
                    date:"15",
                    month:"Jan",
                    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.",
                    views:"3"
                }
            ]
        }
    }

    render() {
        return (
    <div id="blogs">
       <div className="services-area">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                    <div className="section-tittle text-center mb-80">
                        <h2>Welcome to Our Blogs​</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section>
        <div className="container">
            <div className="row d-flex justify-content-center">
                        {this.state.blog.map((blog, key) =>
                            <div className="col-lg-5">
                            <article className="blog_item">
                            <div className="blog_item_img">
                                <img className="card-img rounded-0" src={blogimg} alt=""/>
                                <span className="blog_item_date">
                                    <h3>{blog.date}</h3>
                                    <p>{blog.month}</p>
                                </span>
                            </div>

                            <div className="blog_details">
                                <a className="d-inline-block" href="#">
                                    <h2>{blog.title}</h2>
                                </a>
                                <p>{blog.content}</p>
                                <ul className="blog-info-link">
                                    <li><i className="fa fa-user"></i> By {blog.user}</li>
                                    <li><i className="fa fa-eye"></i> {blog.views} Views</li>
                                </ul>
                            </div>
                        </article>
                        </div>
      
                        )}

           
            </div>
            </div>
            </section>
            </div>

        )
    }
}