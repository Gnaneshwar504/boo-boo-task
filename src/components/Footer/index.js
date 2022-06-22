import './index.css'

const Footer =()=>{
return(
<>
<footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="category-title">Use Invoice Generator</div>
                    <ul>
                        <li>
                            <a href="/#/last">
                                Invoice Template
                            </a>
                        </li>
                        <li>
                            <a href="/help">
                                How to Use
                            </a>
                        </li>
                        <li>
                            <a href="/upgrade">
                                Upgrade
                            </a>
                        </li>
                        <li>
                            <a href="/release-notes">
                                Release Notes
                            </a>
                        </li>
                        <li>
                            <a href="/developers">
                                Developer API
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-4">
                    <div class="category-title">Education</div>
                    <ul>
                        <li>
                            <a href="/guide">
                                Invoicing Guide
                            </a>
                        </li>
                        <li>
                            <a href="https://www.invoiced.com/resources/blog">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-4">
                    <ul>
                        <li class="copyright">
                            &copy; 2012-2022 Invoiced, Inc. All rights reserved.
                        </li>
                        <li>
                            <a href="/terms">
                                Terms of Use
                            </a>
                        </li>
                        <li class="made-by">
                            <a href="https://www.invoiced.com/?utm_source=Lite&amp;utm_medium=web&amp;utm_content=footer&amp;utm_campaign=made_by" title="Invoiced - Simple online invoicing and payments" target="_blank">
                                Made by <strong>Invoiced</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</>

)
}

export default Footer