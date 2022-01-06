import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'

const NoteCard = ({note}) => {
    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                title={note.title}
                subheader={note.category}
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard
