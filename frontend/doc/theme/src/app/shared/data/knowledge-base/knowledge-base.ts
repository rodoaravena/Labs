import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';

export class KB_DB {
        constructor(private _sanitizer: DomSanitizer) {
        }

        static Kb_Category = [
                {

                        title: 'Quick Questions are answered',
                        desc: `
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Lorem Ipsum is simply dummy text of the printing</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Lorem Ipsum has been the industry's standard dummy </span><span class="badge badge-primary pull-right">New</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>When an unknown printer took a galley </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>But also the leap into electronic typesetting, </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (40)</span></a></li>`,
                },
                {

                        title: 'Integrating WordPress with Your Website',
                        desc: `
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>It was popularised in the 1960s with the release</span><span class="badge badge-primary pull-right">Review</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Etraset sheets containing Lorem Ipsum passages</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Desktop publishing software like Aldus PageMaker </span><span class="badge badge-primary pull-right">Articles</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Making this the first true generator on the Internet.</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (90)</span></a></li>`,
                },
                {

                        title: 'WordPress Site Maintenance',
                        desc: `
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>The point of using Lorem Ipsum is that it has a more-or-less </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Normal distribution of letters, as opposed to using </span><span class="badge badge-primary pull-right">Closed</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Lorem Ipsum, you need to be sure there isn't anything  </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Repetition, injected humour, or non-characteristic words etc</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (50)</span></a></li>`

                },
                {

                        title: ' Meta Tags in WordPress',
                        desc: `
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Nemo enim ipsam voluptatem quia voluptas sit  </span><span class="badge badge-primary pull-right">Popular</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Ipsum quia dolor sit amet, consectetur</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Sed quia non numquam eius modi tempora incidunt</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Lorem eum fugiat quo voluptas nulla pariatu</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (90)</span></a></li>`

                },
                {

                        title: 'WordPress in Your Language',
                        desc: `
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Desktop publishing software like Aldus PageMaker</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Etraset sheets containing Lorem Ipsum passages</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>It was popularised in the 1960s with the release</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Making this the first true generator on the Internet</span><span class="badge badge-primary pull-right">Closed</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (50)</span></a></li>`

                },
                {

                        title: 'Know Your Sources',
                        desc: `
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>The point of using Lorem Ipsum </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>It has a more-or-less normal distribution of letters</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Et harum quidem rerum facilis est et expedita</span><span class="badge badge-primary pull-right">Article</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Nam libero tempore, cum soluta nobis est eligendi </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (26)</span></a></li>`

                },
                {

                        title: 'Validating a Website',
                        desc: `
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>When our power of choice is untrammelled </span><span class="badge badge-primary pull-right">Review</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>It will frequently occur that pleasures  </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>who fail in their duty through weakness </span><span class="badge badge-primary pull-right">Closed</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span> At vero eos et accusamus et iusto </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (10)</span></a></li>`

                },
                {

                        title: 'Quick Questions are answered',
                        desc: `
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Quis autem vel eum iure reprehenderit  </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Ducimus  blanditiis praesentium voluptatum</span><span class="badge badge-primary pull-right">Popular</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Omnis voluptas assumenda est</span><span class="badge badge-primary pull-right">Review</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Produces no resultant pleasure</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (21)</span></a></li>`

                },
                {

                        title: 'Integrating WordPress with Your Website',
                        desc: `
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Lorem Ipsum passage, and going through</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>The first line of Lorem Ipsum,  Lorem ipsum </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>Thus comes from a line in section</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="file-text"></i></span><span>First true generator on the Internet</span><span class="badge badge-primary pull-right">On hold</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (34)</span></a></li>`

                }

        ]
}