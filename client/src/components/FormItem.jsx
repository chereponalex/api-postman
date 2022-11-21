import React from 'react';
import dayjs from 'dayjs';
import * as FcIcons from "react-icons/fc";
import * as MdIcons from "react-icons/md";

export const FormItem = ({el, itemClick}) => {
    return (
        <div className='search-form__menu-item' key={el.id} /* onClick={itemClick} */>
            <a href={el.domain} target="_blank">
                <div className='container_description_domain'>
                    <div className='description_domain'>{el.domain}</div>
                    <div className='link_to_project'><FcIcons.FcUpRight style={{ width: '20px', height: '20px' }} /></div>
                </div>
            </a>
            <div className='info_about_site'>
                <div className='remind_days'>
                    <div className='remind_days--block_1'>
                        <p>Certificate SSL:</p>
                        {!el.tls_module_error ? <p className='remind_days--block_1--remind'>{el.remaining_days} days remind </p> : <p className='remind_days--block_1--remind'>need to get cert</p>}
                        <div className='sign_cert'>
                            {
                                !el.tls_module_error ?
                                    <FcIcons.FcApproval style={{ width: '20px', height: '20px' }} />
                                    :
                                    <MdIcons.MdCancel style={{ width: '20px', height: '20px', color: '#ff0071' }} />
                            }
                        </div>
                    </div>
                    <p>until {dayjs(el.valid_to).format('DD.MM.YYYY')}</p>
                </div>
                <div className='site_code'>
                    <p>Доступность сайта:</p>
                    <div className='site_code--block_1'>
                        {el.code ?
                            <>
                                <div className={`${el.code >= 200 && el.code < 300 ? 'circle_code_200' : el.code >= 300 && el.code < 400 ? 'circle_code_300' : 'circle_code_400'}`}></div>
                                <p className='status_code'>{el.code}</p>
                            </>
                            : '---'}

                    </div>

                </div>
            </div>

        </div>
    )
}

export default FormItem;
