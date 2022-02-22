import { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from '../Button';
import Loader from "../Loader";
import Modal from "../Modal"
import { picturesApi } from "../../shared/services/fetchApi";

import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
    state = {
        items: [],
        isLoading: false,
        error: null,
        page: 1,
        finish: false,
        modalOpen: false,
        largeImageURL: ""

    }
    
    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevProps.queryProp;
        const nextQuery = this.props.queryProp;

    
        
        if (prevQuery !== nextQuery) {
            this.setState({items:[], isLoading:true, finish: false})
            this.fetchImages()
        }
        if (this.state.page > prevState.page) {
            this.fetchImages()
        }
    }

    async fetchImages() {
        try {
            const { page } = this.state;
            const { data } = await picturesApi.searchPictures(page, this.props.queryProp);

            this.setState(({ items }) => {
                const newState = {
                    items: [...items, ...data.hits],
                    isLoading: false,
                    error: false
                };
                if (data.hits.length < 12) {
                    
                    newState.finish = true;
                }
                if (!data.hits.length) {
                    newState.error = true;
                }
                return newState
            })
    
        } catch (error) {
            this.setState({error, isLoading: false})
        }
    }

    loadMore = () => {
        this.setState(({ page }) => ({
            isLoading: true,
            page: page + 1
        }))
    }

    showModal = (id) => {
        this.setState(prevState => {
            const { items } = prevState;
            const { largeImageURL, tags } = items.find(item => item.id === id);
            
            return {
                modalOpen: true,
                largeImageURL,
                tags
            }
        })
    }
    closeModal = (e)=> {
        this.setState({
            modalOpen: false
        })
    }
            

    render() {
        const { items, error, isLoading, finish, modalOpen, largeImageURL, tags  } = this.state;
        const { loadMore, showModal,closeModal } = this;

        const elements = items.map(item => <ImageGalleryItem key={item.id} tags={item.tags} webformatURL={item.webformatURL} onClick={() => showModal(item.id)}/>)

        return (
            <div>
                {error && <p>Impossible to load the pictures!</p>}
                {!error && (<ul className={s.list}>
                    {elements}
                </ul>)}
               {isLoading && <Loader />}
                {!finish && items.length !== 0 && <Button onClick={loadMore} title="Load more"></Button>}
                {modalOpen && (<Modal closeModal={closeModal} picture={largeImageURL} tags={tags}/>)}
            </div>
        )
    }
}

export default ImageGallery;

ImageGallery.propTypes = {
    queryProp: PropTypes.string
}